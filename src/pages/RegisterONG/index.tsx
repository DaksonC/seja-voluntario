import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCitys } from "@/hooks/useCitys";
import { useStates } from "@/hooks/useStates";
import { ContainerRegisterONG, ContentSelected } from "./styles";
import { Header } from "@/components/Header";

type IRegisterONGData = {
  name: string;
  email: string;
  activity: string;
  city: string;
  state: string;
};

function RegisterONG() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterONGData>();
  const onSubmit: SubmitHandler<IRegisterONGData> = data => console.log(data);

  const [selectedState, setSelectedState] = useState("");

  const citys = useCitys({ uf: selectedState });
  const states = useStates();

  function handleSelectState(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedState(event.target.value);
  }

  return (
    <>
      <Header />
      <ContainerRegisterONG>
        <h1>Cadastro de ONG 🏩</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Nome da ONG"
          />
          {errors.name && <span>Nome da ONG é obrigatório!</span>}

          <input
            {...register("email", { required: true })}
            placeholder="E-mail da ONG"
          />
          {errors.email && <span>E-mail da ONG é obrigatório!</span>}

          <input
            {...register("activity", { required: true })}
            placeholder="Atividade que a ONG desenvolve"
          />
          {errors.activity && <span>Atividade que a ONG desenvolve é obrigatória!</span>}

          <ContentSelected>
            <select
              {...register("state", { required: true })}
              onChange={handleSelectState}
              value={selectedState}
            >
              <option value="">UF</option>
              {states.map(state => (
                <option key={state.id} value={state.sigla}>{state.nome}</option>
              ))}
            </select>
            <select {...register("city", { required: true })}>
              <option value="">Cidade</option>
              {citys.map(city => (
                <option key={city.codigo_ibge} value={city.nome}>{city.nome}</option>
              ))}
            </select>
          </ContentSelected>
          {errors.city && <span>Cidade da ONG é obrigatória!</span>}

          <button type="submit">Salvar</button>
        </form>
      </ContainerRegisterONG>
    </>
  );
}

export default RegisterONG;