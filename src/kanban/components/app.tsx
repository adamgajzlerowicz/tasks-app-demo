import * as React from 'react'
import {Kanban} from "../kanban";
import Select from 'react-select'
import {BoardContext, makeBoardOption} from "../utils";
import {useBoardList} from "../queries";
import {Loading} from "./loading";
import styled from "styled-components";
import {mediumSize} from "../../design-system";

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SelectText = styled.span`
  padding-left: ${mediumSize}px;
  padding-right: ${mediumSize}px;
`

const SelectContainer = styled.div`
  width: 250px;
`

export const App = () => {
    const [boardData, loading] = useBoardList()
    const [selectedBoard, setSelectedBoard] = React.useState<string | undefined>(undefined)

    const boardOptions = boardData?.docs.map(board => {
        const itemData = board.data()
        return makeBoardOption({ ...itemData, id: board.id })
    })

    React.useEffect(() => {
        if (!selectedBoard && boardOptions?.length && boardOptions.length > 0) {
            setSelectedBoard(boardOptions[0].value)
        }
    }, [selectedBoard, setSelectedBoard, boardOptions])


    if (loading || !boardData || !selectedBoard || !boardOptions) {
        return <Loading />
    }

    const selectedBoardValue = boardOptions.find(item => item.value === selectedBoard)

    return <>
        <SelectWrapper>
            <SelectText>Board: </SelectText>
            <SelectContainer>
                <Select
                width='200px'
                options={boardOptions}
                value={selectedBoardValue}
                onChange={value => {
                    if (value) {
                        setSelectedBoard(value.value)
                    }
                }
                }/>
            </SelectContainer>
        </SelectWrapper>

        <BoardContext.Provider value={selectedBoard}>
            <Kanban />
        </BoardContext.Provider>
    </>
}
