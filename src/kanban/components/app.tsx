import * as React from 'react'
import {Kanban} from "../kanban";
import Select from 'react-select'
import {BoardContext} from "../utils";
import {useBoardList} from "../queries";
import {Loading} from "./loading";

export const App = () => {
    const [boardData, loading] = useBoardList()
    const [selectedBoard, setSelectedBoard] = React.useState<string>()

    // TODO test
    const boardOptions = boardData?.docs.map(board => {
        const itemData = board.data()
        const label = `${itemData.title} (${itemData.num_tasks} tasks)`
        return {
            value: board.id,
            label
        }
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
        <Select
            options={boardOptions}
            value={selectedBoardValue}
            onChange={value => {
                if (value) {
                    setSelectedBoard(value.value)
                }
            }
        }/>

        <BoardContext.Provider value={selectedBoard ?? ''}>
            <Kanban />
        </BoardContext.Provider>
    </>
}
