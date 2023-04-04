import Modal from "react-modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCitys } from "@/hooks/useCitys";
import { Header } from "@/components/Header";
import { useStates } from "@/hooks/useStates";
import { ButtonModalCancel, ButtonModalOK, ContainerRegisterVoluntary, ContentSelected, LabelModal, customStyles } from "./styles";

type IRegisterVoluntaryData = {
  name: string;
  email: string;
  occupation: string;
  city: string;
  state: string;
};

function RegisterVoluntary() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IRegisterVoluntaryData>();
  const onSubmit: SubmitHandler<IRegisterVoluntaryData> = data => {
    openModal();
  };

  const [selectedState, setSelectedState] = useState("");

  const citys = useCitys({ uf: selectedState });
  const states = useStates();

  function handleSelectState(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedState(event.target.value);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleConfirmFormData() {
    alert("Dados confirmados com sucesso!");
    closeModal();
  }

  return (
    <>
      <Header />
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
          {errors.city && <span>Cidade do voluntário é obrigatória!</span>}

          <button type="submit">Salvar</button>
        </form>
      </ContainerRegisterVoluntary>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <LabelModal>
          Por favor, confirme os seu dados, porque não será possível altera-los após a confirmação.
        </LabelModal>
        <form>
          <ButtonModalCancel onClick={closeModal}>Cancelar</ButtonModalCancel>
          <ButtonModalOK type="button" onClick={handleConfirmFormData}>OK</ButtonModalOK>
        </form>
      </Modal>
    </>
  );
}

export default RegisterVoluntary;