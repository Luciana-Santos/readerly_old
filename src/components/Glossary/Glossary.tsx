import { GlossaryProps } from '../../types/types';
import {
  AddWordButton,
  GlossaryWords,
  PlayAudioButton,
  WordClass,
  WordDefinition,
  WordSynonyms,
  WordTitle,
} from './Glossary.styled';

const Glossary = ({ words }: GlossaryProps) => {
  const newWordsArr = words?.map((word) =>
    word.replace(/[,:?!.]/g, '').toLowerCase()
  );

  return (
    <GlossaryWords>
      {newWordsArr?.map((word) => {
        return (
          <div key={word}>
            <WordTitle>
              <AddWordButton />
              {word}
              <PlayAudioButton />
            </WordTitle>
            <WordClass>noun</WordClass>
            <WordSynonyms>
              <span>Synonyms: </span>ability, talent
            </WordSynonyms>
            <WordDefinition>
              Maecenas ut elit malesuada, dignissim felis sit amet, faucibus
              tortor.
            </WordDefinition>
          </div>
        );
      })}
    </GlossaryWords>
  );
};
export default Glossary;
