import React from "react";
import styled from "styled-components";

import { Overlay } from "./overlay";

const Box = styled.div<{ width?: number }>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 6px;
  background-color: #fff;
  margin: 0;
  user-select: none;
`;

export default function Modal({
  open,
  onClose,
  children,
}: React.PropsWithChildren<{ open: boolean; onClose?: () => void }>) {
  return open ? (
    <Overlay onClick={onClose}>
      <Box role="dialog" onClick={silenceEvent}>
        {children}
      </Box>
    </Overlay>
  ) : null;
}

export function silenceEvent(e?: React.SyntheticEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
  }
}
