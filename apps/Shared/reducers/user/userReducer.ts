import { IAction } from "../../types/IAction";

interface IMoq {
  test: number;
}

const moq = {
  test: 0
}

export const user = (
  state = moq,
  action: IAction<Object>
): IMoq => {
  switch (action.type) {
    default : return state;
  }
}