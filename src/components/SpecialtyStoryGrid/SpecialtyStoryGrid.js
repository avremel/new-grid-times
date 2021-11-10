import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 48px;
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    padding: 0 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 16px;
    display: flex;
    gap: 48px;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  & > a {
    flex: 1 1 180px;
  }
  @media ${QUERIES.tabletAndUp} {
    & > a {
      flex: 0 1 180px;
    }
  }
`;

const SportsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    min-width: 0;
  }
`;

const SportsStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  & > a {
    flex: 0 1 180px;
  }
  
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
    overflow: auto;
    flex-wrap: revert;
  }
`;

export default SpecialtyStoryGrid;
