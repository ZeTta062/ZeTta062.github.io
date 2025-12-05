import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";

export const useClock = () => {
  const [time, setTime] = useState(() =>
    format(new Date(), "M월 d일 a hh:mm eee", { locale: ko })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        format(new Date(), "M월 d일 a hh:mm eee", { locale: ko })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};