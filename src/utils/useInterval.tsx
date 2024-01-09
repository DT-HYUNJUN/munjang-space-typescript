import { useEffect, useRef } from "react";

interface Props {
  callback: () => void;
  delay: number;
}

const useInterval = (props: Props) => {
  const savedCallback = useRef(props.callback);

  useEffect(() => {
    savedCallback.current = props.callback;
  });

  useEffect(() => {
    // cf. delay 인자에 null 값을 전달할 경우 타이머를 멈출 수 있음
    if (props.delay === null) return;

    const timer = setInterval(() => savedCallback.current(), props.delay);
    return () => clearInterval(timer);
  }, [props.delay]);
};

export default useInterval;
