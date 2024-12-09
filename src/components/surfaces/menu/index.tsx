import * as Navigation from "@radix-ui/react-navigation-menu";

import { Avatar } from "@components/ui/avatar";
import { Button } from "@components/ui/form/button";

export type MenuProps = {
  username: string;
  avatarImage: string;
  signOut: () => void;
  children: React.ReactNode;
};

export function Menu({ signOut, children, username, avatarImage }: MenuProps) {
  return (
    <Navigation.Root id="navigation">
      <Navigation.List>
        <Navigation.Item>
          <Navigation.Trigger>{children}</Navigation.Trigger>
          <Navigation.Content className="absolute right-2 w-[300px] rounded bg-zinc-50 shadow">
            <div className="flex w-full items-center gap-4 border-b border-b-zinc-200 p-2">
              <Avatar image={avatarImage} username={username} />

              <p className="inline-block">{username}</p>
            </div>

            <div className="w-full p-4">
              <Button onClick={signOut} className="w-full">
                Sair
              </Button>
            </div>
          </Navigation.Content>
        </Navigation.Item>
      </Navigation.List>
    </Navigation.Root>
  );
}
