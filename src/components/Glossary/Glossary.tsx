import { GlossaryProps } from '../../types/types';
import {
  AddWordButton,
  GlossaryWords,
  PlayAudioButton,
  WordDefinition,
  WordPronunciation,
  WordSynonyms,
  WordTitle,
} from './Glossary.styled';

const Glossary = ({ words }: GlossaryProps) => {
  return (
    <GlossaryWords>
      {words?.map((word) => {
        return (
          <>
            <WordTitle>
              <AddWordButton />
              {word}
              <PlayAudioButton />
            </WordTitle>
            <WordPronunciation>
              /<span>hdfgr</span>/
            </WordPronunciation>
            <WordSynonyms>
              <span>Synonyms: </span>ability, talent
            </WordSynonyms>
            <WordDefinition>
              Maecenas ut elit malesuada, dignissim felis sit amet, faucibus
              tortor.
            </WordDefinition>
          </>
        );
      })}
    </GlossaryWords>
  );
};
export default Glossary;
