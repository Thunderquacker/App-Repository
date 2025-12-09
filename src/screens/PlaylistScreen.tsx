import React, { useReducer, useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, Pressable, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SimpleButton from "../components/SimpleButton";

const ACTIONS = { ADD: "ADD", REMOVE: "REMOVE", UNDO: "UNDO", REDO: "REDO", LOAD: "LOAD" };

const reducer = (state: any, action: any) => {
  const { history, currentIndex } = state;

  switch (action.type) {
    case ACTIONS.ADD: {
      const newList = [...state.list, action.song];
      return {
        list: newList,
        history: [...history.slice(0, currentIndex + 1), newList],
        currentIndex: currentIndex + 1,
      };
    }

    case ACTIONS.REMOVE: {
      const updated = state.list.filter((_: any, i: number) => i !== action.index);
      return {
        list: updated,
        history: [...history.slice(0, currentIndex + 1), updated],
        currentIndex: currentIndex + 1,
      };
    }

    case ACTIONS.UNDO:
      if (currentIndex <= 0) return state;
      return { ...state, list: history[currentIndex - 1], currentIndex: currentIndex - 1 };

    case ACTIONS.REDO:
      if (currentIndex >= history.length - 1) return state;
      return { ...state, list: history[currentIndex + 1], currentIndex: currentIndex + 1 };

    case ACTIONS.LOAD:
      return action.payload;

    default:
      return state;
  }
};

const SongRow = React.memo(function SongRow({
  item,
  onRemove,
}: {
  item: string;
  onRemove: () => void;
}) {
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const handleRemove = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) onRemove();
    });
  };

  return (
    <Animated.View style={{ opacity, padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{item}</Text>
      <Pressable onPress={handleRemove}>
        <Text style={{ color: "red" }}>Remove</Text>
      </Pressable>
    </Animated.View>
  );
});

export default function PlaylistScreen() {
  const [song, setSong] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    history: [[]],
    currentIndex: 0,
  });

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("playlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed &&
          Array.isArray(parsed.list) &&
          Array.isArray(parsed.history) &&
          typeof parsed.currentIndex === "number"
        ) {
          dispatch({ type: ACTIONS.LOAD, payload: parsed });
        }
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("playlist", JSON.stringify(state));
  }, [state]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Playlist</Text>

      <TextInput
        placeholder="Song Title"
        value={song}
        onChangeText={setSong}
        style={{ padding: 12, borderWidth: 1, marginVertical: 10 }}
      />

      <SimpleButton
        title="Add Song"
        onPress={() => {
          if (song.trim()) dispatch({ type: ACTIONS.ADD, song });
          setSong("");
        }}
      />

      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        <SimpleButton title="Undo" onPress={() => dispatch({ type: ACTIONS.UNDO })} />
        <SimpleButton title="Redo" onPress={() => dispatch({ type: ACTIONS.REDO })} />
      </View>

      <FlatList
        data={state.list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <SongRow item={item} onRemove={() => dispatch({ type: ACTIONS.REMOVE, index })} />
        )}
      />
    </View>
  );
}
