import styled, { css } from 'styled-components';
import { MdBookmarkAdd } from 'react-icons/md';
import { HiOutlinePlay } from 'react-icons/hi';

export const GlossaryWords = styled.dl`
  max-width: 760px;
  margin-inline: auto;
  font-size: 18px;
  display: grid;
  gap: 8px;

  dt {
    color: ${({ theme }) => theme.colors.textColor};
  }

  dd {
    margin-left: 32px;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const WordTitle = styled.dt`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 600;
  margin-top: 22px;
`;

export const WordPronunciation = styled.dd`
  color: ${({ theme }) => theme.colors.textColor};
  opacity: 0.6;

  span {
    font-style: italic;
  }
`;

export const WordSynonyms = styled.dd`
  span {
    font-weight: 600;
  }
`;

export const WordDefinition = styled.dd``;

export const AddWordButton = styled(MdBookmarkAdd)`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    cursor: pointer;
    font-size: 30px;
    padding: 4px;
  `}
`;

export const PlayAudioButton = styled(HiOutlinePlay)`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    cursor: pointer;
    font-size: 30px;
    padding: 4px;
  `}
`;
