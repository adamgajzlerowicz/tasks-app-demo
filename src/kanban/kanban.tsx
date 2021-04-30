import * as React from 'react'
import styled from "styled-components";
import {colors, mediumSize} from "../design-system";
import firebase from 'firebase'
import {Lane} from "./components/lane";
import { useCollection } from 'react-firebase-hooks/firestore';
import {BoardItem } from "./types";

const Container = styled.div`
  padding-top: ${mediumSize}px;
  padding-left: ${mediumSize}px;
  padding-right: ${mediumSize}px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap: ${mediumSize*2}px;
  background-color: ${colors.background};
  min-height: 100vh;
`

export const Kanban = () => {
    const [data, loading, error] = useCollection(
        firebase.firestore().collection('boards').doc('gmcMohbh9a4GSVFDivFv').collection('tasks'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) {
        return <div>loading</div>
    }


    const items: Array<BoardItem> = [{
        title: "foo",
        lane: "candidates"
    }, {
        title: "bar",
        lane: "inProgress"
    }]
    return <Container>
        <Lane title="Candidates" items={items}/>
        <Lane title="In Progress" items={[]}/>
        <Lane title="QA / Code review" items={items}/>
        <Lane title="Completed" items={[]}/>
    </Container>
}
