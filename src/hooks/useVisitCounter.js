import { useEffect, useRef, useState } from "react";
import { getCookie, setCookie } from "../lib/cookies";

const COOKIE_NAME = "mikro7_visits";
const COOKIE_DAYS = 365;

/**
 * Contador de visitas basado en cookies, por dispositivo/navegador.
 *
 * ⚠️ Alcance: al vivir en una cookie del propio navegador, este contador
 * refleja cuántas veces entró ESTE dispositivo, no el total de visitantes
 * reales del sitio (eso requeriría un backend o un servicio de analítica
 * externo). Sirve como detalle simpático tipo "¡Volviste!", no como métrica
 * de tráfico real.
 *
 * @returns {{ count: number, isFirstVisit: boolean }}
 */
export function useVisitCounter() {
  const [count, setCount] = useState(() => Number(getCookie(COOKIE_NAME)) || 0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    // Evita doble incremento por el doble-render de <StrictMode> en desarrollo.
    if (hasRun.current) return;
    hasRun.current = true;

    const previous = Number(getCookie(COOKIE_NAME)) || 0;
    const next = previous + 1;

    setCookie(COOKIE_NAME, String(next), COOKIE_DAYS);
    setCount(next);
    setIsFirstVisit(previous === 0);
  }, []);

  return { count, isFirstVisit };
}
