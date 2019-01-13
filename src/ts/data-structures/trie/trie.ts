import { TrieNode } from "./trieNode";

// addWord(word)
// deleteWord(word)
// suggestNextCharacters(word)
// doesWordExist(word)
// getLastCharacterNode(word)

class Trie {
  head: TrieNode;
  constructor() {
    this.head = new TrieNode("*", false);
  }

  public addWord(word: string) {
    const characters: string[] = Array.from(word);
    let nodePtr = this.head;
    for (let charIdx = 0; charIdx < characters.length; charIdx += 1) {
      const isComplete = charIdx == characters.length - 1;
      nodePtr.addChild(characters[charIdx], isComplete);
    }
  }

  public deleteWord(word: string) {
    const characters = Array.from(word);

    const dfsDel = (ptr: TrieNode, idx: number = 0) => {
      if (idx > word.length) {
        return;
      }
      const nextPtr = ptr.getChild(characters[idx]);

      if (!nextPtr) {
        return;
      }
      dfsDel(nextPtr, idx + 1);
      ptr.removeChild(characters[idx]);
    };

    dfsDel(this.head);
  }

  // public suggestNextCharacters(word: string): {
  //   const characters: string[] = Array.from(word);
  // }
}
