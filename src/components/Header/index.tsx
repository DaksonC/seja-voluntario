import { useRouter } from "next/router";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  ContainerHeader,
  ContentHeaderLogo,
  ContentHeaderMenu,
  ContentHeaderMenuItemDesktop,
  ContentHeaderMenuMobile,
  ContentHeaderMenuMobileItem,
  DropdownMenuTrigger,
  LinkHome
} from "./styles";
import { ButtonRegister } from "../ButtonRegister";

export function Header() {
  const router = useRouter()

  function handleRegisterONG() {
    router.push('/RegisterONG')
  }

  function handleRegisterVoluntary() {
    router.push('/RegisterVoluntary')
  }

  const isDisabled = (href: string) => router.pathname === href;

  return (
    <ContainerHeader>
      <ContentHeaderLogo>Logo</ContentHeaderLogo>
      <ContentHeaderMenu>
        <ContentHeaderMenuItemDesktop>
          <LinkHome>Home</LinkHome>
          <ButtonRegister
            onClick={handleRegisterONG}
            title="Cadastrar ONG"
            {...(isDisabled('/RegisterONG') && { disabled: true })}
          />
          <ButtonRegister
            onClick={handleRegisterVoluntary}
            title="Cadastrar Voluntário"
            {...(isDisabled('/RegisterVoluntary') && { disabled: true })}
          />
        </ContentHeaderMenuItemDesktop>

        <DropdownMenu.Root>
          <DropdownMenuTrigger>
            <button className="IconButton" aria-label="Customise options">
              <HamburgerMenuIcon />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenu.Portal>
            <ContentHeaderMenuMobile>
              <ContentHeaderMenuMobileItem>
                <LinkHome>Home</LinkHome>
              </ContentHeaderMenuMobileItem>
              <ContentHeaderMenuMobileItem>
                <ButtonRegister
                  onClick={handleRegisterONG}
                  title="Cadastrar ONG"
                  {...(isDisabled('/RegisterONG') && { disabled: true })}
                />
              </ContentHeaderMenuMobileItem>
              <ContentHeaderMenuMobileItem>
                <ButtonRegister
                  onClick={handleRegisterVoluntary}
                  title="Cadastrar Voluntário"
                  {...(isDisabled('/RegisterVoluntary') && { disabled: true })}
                />
              </ContentHeaderMenuMobileItem>
            </ContentHeaderMenuMobile>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </ContentHeaderMenu>
    </ContainerHeader>
  )
}