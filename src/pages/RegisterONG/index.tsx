import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCitys } from "@/hooks/useCitys";
import { Header } from "@/components/Header";
import { useStates } from "@/hooks/useStates";

import {
  ButtonModalCancel,
  ButtonModalOK,
  ContainerRegisterONG,
  ContentSelected,
  LabelModal,
  customStyles
} from "./styles";

type IRegisterONGData = {
  name: string;
  email: string;
  description: string;
  city: string;
  state: string;
};

function RegisterONG() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegisterONGData>();
  const onSubmit: SubmitHandler<IRegisterONGData> = data => {
    openModal();
  }

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

  async function handleConfirmFormData(data: IRegisterONGData | any) {
    try {
      const response = await axios.post("/api/ongs", data);
      closeModal();
      reset()
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <ContainerRegisterONG>
        <h1>Cadastro de ONG 🏥</h1>
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

          <textarea
            {...register("description", { required: true, maxLength: 250 })}
            placeholder="Atividade que a ONG desenvolve"
          />
          {errors.description && <span>Atividade que a ONG desenvolve é obrigatória! Máximo de 250 caracteres!</span>}

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <LabelModal>
          Por favor, confirme os dados ONG, porque não será possível alterá-los após a confirmação.
        </LabelModal>
        <form onSubmit={handleSubmit(handleConfirmFormData)}>
          <ButtonModalCancel onClick={closeModal}>Cancelar</ButtonModalCancel>
          <ButtonModalOK type="submit">OK</ButtonModalOK>
        </form>
      </Modal>
    </>
  );
}

export default RegisterONG;
