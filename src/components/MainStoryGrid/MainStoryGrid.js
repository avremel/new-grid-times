import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 2px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    background-color: var(--color-gray-300);
    & > * {
      background: var(--color-gray-100);
      padding: 16px;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story main-story main-story secondary-stories"
      "advertisement advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story secondary-stories opinion-stories"
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > a:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-gray-300);
  }
  & > a:not(:first-child) {
    padding-top: 8px;
  }
  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      gap: 32px;
      flex-direction: row;
      & > a:not(:last-child) {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
