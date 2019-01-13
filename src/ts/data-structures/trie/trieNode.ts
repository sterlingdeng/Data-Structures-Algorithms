class TrieNode {
  isCompleteWord: boolean;
  children: object;
  character: string;
  constructor(character, isCompleteWord = false) {
    this.children = {};
    this.character = character;
    this.isCompleteWord = isCompleteWord;
  }

  public getChild(char: string): TrieNode {
    return Object.hasOwnProperty.call(this.children, char)
      ? this.children[char]
      : undefined;
  }

  public addChild(char: string, isCompleteWord: boolean): object {
    if (!Object.hasOwnProperty.call(this.children, char)) {
      this.children[char] = new TrieNode(char);
    }
    const childNode: TrieNode = this.children[char];

    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

    return childNode;
  }

  public removeChild(char: string): TrieNode {
    // remove if child is not a full word, exists.
    const childNode = this.getChild(char);

    if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
      delete this.children[char];
    }
    return this;
  }

  public hasChild(char: string): boolean {
    return Object.hasOwnProperty.call(this.children, char);
  }

  public hasChildren(): boolean {
    return Object.keys(this.children).length === 0;
  }

  public suggestChildren(): string[] {
    return Object.keys(this.children);
  }
}

export { TrieNode };
