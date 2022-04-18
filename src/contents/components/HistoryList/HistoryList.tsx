import { FC } from "react"
import styled from '@emotion/styled';

interface HistoryListProps {
  histories: chrome.history.HistoryItem[]
}

export const HistoryList: FC<HistoryListProps> = ({ histories }) => {
  return (
    <StUl>
      {
        histories.map(history => {
          return (
            <StLi>
              <StLink href={history.url} target='_blank'>
                <StTitle>{history.title}</StTitle>
                <StUrl>{history.url}</StUrl>
              </StLink>
            </StLi>
          )
        })
      }
    </StUl>
  )
}

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StLi = styled.li`
  background-color: white;
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  margin-bottom: 1px;
  width: 100%;
`

const StTitle = styled.span`
  font-size: 16px;
  margin-bottom: 4px;
`

const StUrl = styled.span`
  color: blue;
  font-size: 12px;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`

const StLink = styled.a`
  padding: 8px;
  text-decoration: none;
  color: unset;
  display: flex;
  flex-direction: column;

  &:hover, &:focus {
    background: #C0C0C0;
    color: white;
    text-decoration: none;
  }
`
