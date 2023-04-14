import axios from 'axios'
import Modal from 'react-modal'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useCitys } from '@/hooks/useCitys'
import { Header } from '@/components/Header'
import { useStates } from '@/hooks/useStates'
import {
  ButtonModalCancel,
  ButtonModalOK,
  ContainerRegisterVoluntary,
  ContentSelected,
  LabelModal,
  customStyles,
} from './styles'

type IRegisterVoluntaryData = {
  name: string
  email: string
  description: string
  city: string
  state: string
}

function RegisterVoluntary() {
  const [modalIsOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterVoluntaryData>()
  const onSubmit: SubmitHandler<IRegisterVoluntaryData> = (data) => {
    openModal()
  }

  const [selectedState, setSelectedState] = useState('')

  const citys = useCitys({ uf: selectedState })
  const states = useStates()

  function handleSelectState(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedState(event.target.value)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function handleConfirmFormData(data: IRegisterVoluntaryData | any) {
    try {
      await axios.post('/api/voluntarys', data)
      closeModal()
      toast.success('Cadastro realizado com sucesso!')
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <ContainerRegisterVoluntary>
        <h1>Cadastro de Voluntário 👤</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name', { required: true })} placeholder="Nome" />
          {errors.name && <span>Nome do voluntário é obrigatório!</span>}

          <input
            {...register('email', { required: true })}
            placeholder="E-mail"
          />
          {errors.email && <span>E-mail do vonluntário é obrigatório!</span>}

          <textarea
            {...register('description', { required: true, maxLength: 250 })}
            placeholder="Descreva sua disponibilidade de horário e o que gosta de fazer."
          />
          {errors.description && (
            <span>
              Descrever a disponibilidade é obrigatória! Máximo de 250
              caracteres!
            </span>
          )}

          <ContentSelected>
            <select
              {...register('state', { required: true })}
              onChange={handleSelectState}
              value={selectedState}
            >
              <option value="">UF</option>
              {states.map((state) => (
                <option key={state.id} value={state.sigla}>
                  {state.nome}
                </option>
              ))}
            </select>
            <select {...register('city', { required: true })}>
              <option value="">Cidade</option>
              {citys.map((city) => (
                <option key={city.codigo_ibge} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </select>
            {errors.city && <span>Cidade do voluntário é obrigatória!</span>}
          </ContentSelected>

          <button type="submit">Salvar</button>
        </form>
      </ContainerRegisterVoluntary>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <LabelModal>
          Por favor, confirme os seu dados, porque não será possível alterá-los
          após a confirmação.
        </LabelModal>
        <form onSubmit={handleSubmit(handleConfirmFormData)}>
          <ButtonModalCancel onClick={closeModal}>Cancelar</ButtonModalCancel>
          <ButtonModalOK type="submit">OK</ButtonModalOK>
        </form>
      </Modal>
    </>
  )
}

export default RegisterVoluntary
