import { useEffect, useState } from "react";

interface ICitys {
  nome: string;
  codigo_ibge: string;
}

function useCitys({ uf }: { uf: string }) {
  const [citys, setCitys] = useState<ICitys[]>([]);

  useEffect(() => {
    if (!uf) return;
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCitys(data));
  }, [uf]);

  return citys;
}

export { useCitys };