import { useReducer } from "react";
import { calculate, isConsecutiveNonNumericInputs } from "../helpers";

type Mode = "input" | "calculate";

type CalculationState = {
  mode: Mode;
  input: string[];
  result: number;
};

type ActionType = "input" | "delete" | "reset" | "calculate";

type Action = {
  type: ActionType;
  payload?: string;
};

const initialState: CalculationState = {
  mode: "calculate",
  input: [],
  result: 0,
};

export function useCalculation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    input: selectInput(state),
    result: selectResult(state),
    mode: selectMode(state),
    output: selectOutput(state),
    calculate: () => dispatch({ type: "calculate" }),
    reset: () => dispatch({ type: "reset" }),
    inputKey: (key: string) => dispatch({ type: "input", payload: key }),
    deleteKey: () => dispatch({ type: "delete" }),
  };
}

function reducer(state: CalculationState, action: Action): CalculationState {
  switch (action.type) {
    case "calculate":
      return {
        ...state,
        result: calculate(state.input),
        mode: "calculate",
      };
    case "reset":
      return { ...initialState };
    case "input": {
      if (action.payload == null) {
        return state;
      }

      if (isConsecutiveNonNumericInputs(state.input, action.payload)) {
        return state;
      }

      return {
        ...state,
        input: [...state.input, action.payload!],
        result: 0,
        mode: "input",
      };
    }
    case "delete": {
      const remainingInput = state.input.slice(0, -1);

      return {
        ...state,
        input: remainingInput.length ? remainingInput : ["0"],
        mode: "input",
      };
    }
    default:
      return state;
  }
}

const selectResult = (state: CalculationState) => state.result;
const selectInput = (state: CalculationState) => state.input;
const selectMode = (state: CalculationState) => state.mode;
const selectOutput = (state: CalculationState) =>
  selectMode(state) === "input"
    ? selectInput(state).join("")
    : selectResult(state).toLocaleString();
