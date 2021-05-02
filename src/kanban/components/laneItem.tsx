import * as React from 'react'
import {BsCheckCircle} from "react-icons/bs";
import styled from "styled-components";
import {borderRadius, colors, mediumSize} from "../../design-system";
import {RawButton} from "./rawButton";
import {useUpdateTask, useTask} from "../queries";
import {DeleteTask} from "./deleteTask";
import {MoveLeft} from "./moveLeft";
import {MoveRight} from "./moveRight";

const LaneItemContainer = styled.div`
  padding: ${mediumSize}px;
  background-color: ${colors.background3};
  border-radius: ${borderRadius}px;
  margin-bottom: ${mediumSize}px;
  min-height: 100px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const LaneItemInner = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`

const CircleIcon = styled(BsCheckCircle)`
  margin-right: ${mediumSize/2}px;
`

const Editable = styled(RawButton)`
  min-height: ${mediumSize * 3}px;
  flex: 1
`

const RemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; 
`

type Props = {
    id: string
}

export const LaneItem = ({ id }: Props) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [data] = useTask(id)
    const saveTask = useUpdateTask(id)
    const textRef = React.useRef(null)

    return <LaneItemContainer>
        <LaneItemInner>
            <CircleIcon color={colors.gray2}/>
            <Editable
                ref={textRef}
                onClick={() => {
                    setIsEditable(true)
                    setTimeout(function() {
                        if (document.activeElement !== textRef.current) {
                            setIsEditable(false)
                        }
                    }, 500);
                }}
                contentEditable={isEditable}
                suppressContentEditableWarning={true}
                onBlur={(e) => {
                    if (typeof e.currentTarget.textContent === 'string') {
                        saveTask({title: e.currentTarget.textContent})
                    }
                    setIsEditable(false)
                }}
                >
                {data?.title}
            </Editable>

            <MoveLeft id={id}/>

            <MoveRight id={id}/>

        </LaneItemInner>

        <RemoveContainer><DeleteTask id={id} /></RemoveContainer>
    </LaneItemContainer>
}
