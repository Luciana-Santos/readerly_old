export interface Readerly {
  id: number;
  tag: string;
  text: string[];
  author?: string;
  title: string;
}

export interface DictionaryProps {
  word: string;
  class: string;
  synonyms: string[];
  meaning: string;
}

export interface GlossaryProps {
  words: string[];
}
