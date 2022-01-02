import { useContext } from "react";
import { TokensContext } from "../contexts/tokens-context";

export const useTokens = () => useContext(TokensContext);
