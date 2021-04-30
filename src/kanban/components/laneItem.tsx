import * as React from 'react'
import {BoardItem} from "../types";
import {BsArrowLeft, BsArrowRight, BsCheckCircle} from "react-icons/bs";
import styled from "styled-components";
import {borderRadius, colors, mediumSize} from "../../design-system";
import {RawButton} from "./rawButton";
import {useClick} from "../utils";

const LaneItemContainer = styled.div`
  padding: ${mediumSize}px;
  background-color: ${colors.background3};
  border-radius: ${borderRadius}px;
  margin-bottom: ${mediumSize}px;
  min-height: 100px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
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
  flex: 1
`

type Props = {
    item: BoardItem
}

export const LaneItem = ({ item }: Props) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const edit = useClick(() => {
        setIsEditing(true)
    })

    return <LaneItemContainer>
        <LaneItemInner>
            <CircleIcon color={colors.gray2}/>
            <Editable
                onClick={edit}
            >
                <div
                    contentEditable={isEditing}
                    onBlur={(e) => {
                        setIsEditing(false)
                        console.log(e.currentTarget.textContent)
                    }}
                    suppressContentEditableWarning={true}>
                    {item.title}
                </div>
            </Editable>

            <RawButton><BsArrowLeft/></RawButton>
            <RawButton><BsArrowRight/></RawButton>
        </LaneItemInner>
    </LaneItemContainer>
}
