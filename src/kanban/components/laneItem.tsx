import * as React from 'react'
import {BoardItem} from "../types";
import {BsCheckCircle} from "react-icons/bs";

type Props = {
   item: BoardItem
}

export const LaneItem = ({ item }: Props) => {
   return <div>
      <BsCheckCircle />
      {item.title}
   </div>
}
