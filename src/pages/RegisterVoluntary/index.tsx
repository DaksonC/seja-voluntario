import { ContainerRegisterVoluntary } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

type IRegisterVoluntaryData = {
  name: string;
  email: string;
  occupation: string;
  city: string;
};

function RegisterVoluntary() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IRegisterVoluntaryData>();
  const onSubmit: SubmitHandler<IRegisterVoluntaryData> = data => console.log(data);

  return (
    <ContainerRegisterVoluntary>
      <h1>Cadastro de Voluntário 👤</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Nome"
        />
        {errors.name && <span>Nome do voluntário é obrigatório!</span>}

        <input
          {...register("email", { required: true })}
          placeholder="E-mail"
        />
        {errors.email && <span>E-mail do vonluntário é obrigatório!</span>}

        <input
          {...register("occupation", { required: true })}
          placeholder="Profissão"
        />
        {errors.occupation && <span>A profissão do voluntário é obrigatória!</span>}

        <input
          {...register("city", { required: true })}
          placeholder="Cidade"
        />
        {errors.city && <span>Cidade do voluntário é obrigatória!</span>}

        <button type="submit">Salvar</button>
      </form>
    </ContainerRegisterVoluntary>
  );
}

export default RegisterVoluntary;