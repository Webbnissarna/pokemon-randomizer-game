import { ChangeEvent, useMemo, useState } from "react";
import { Flex } from "theme-ui";
import Button from "../../atoms/Button";
import CardBox from "../../atoms/CardBox";
import TabRadioInput from "../../atoms/TabRadioInput";
import TextInput from "../../atoms/TextInput";
import set from "lodash/fp/set";
import { OnChangeEvent } from "../../atoms/TextInput/TextInput.types";

interface SetupOptions {
  playerNames: string[];
}

interface SetupProps {
  onPlay: (setupOptions: SetupOptions) => void;
}

enum TabValue {
  Solo = "Solo",
  TwoPlayer = "2-player",
}

const tabValues = Object.values(TabValue);

export default function Setup({ onPlay }: SetupProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabValue.TwoPlayer);
  const [setupOptions, setSetupOptions] = useState<SetupOptions>({
    playerNames: ["", ""],
  });

  const onTabChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActiveTab(event.target.value as TabValue);
  };

  const playButtonEnabled = useMemo(() => {
    return (
      activeTab === TabValue.Solo ||
      !setupOptions.playerNames.some((value) => value.length === 0)
    );
  }, [activeTab, setupOptions.playerNames]);

  const updatePlayerName = (event: OnChangeEvent, playerNo: number) => {
    setSetupOptions((current) =>
      set(`playerNames[${playerNo}]`, event.target.value, current)
    );
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: "md",
      }}
    >
      <TabRadioInput
        values={tabValues}
        selected={activeTab}
        onChange={onTabChange}
      />
      <CardBox>
        <Flex sx={{ flexDirection: "column", gap: "md" }}>
          {activeTab === TabValue.TwoPlayer && (
            <Flex sx={{ gap: "md" }}>
              <TextInput
                placeholder="Player 1 Name"
                value={setupOptions.playerNames[0]}
                onChange={(event) => updatePlayerName(event, 0)}
              />
              <TextInput
                placeholder="Player 2 Name"
                value={setupOptions.playerNames[1]}
                onChange={(event) => updatePlayerName(event, 1)}
              />
            </Flex>
          )}
          <Button
            text="Play"
            variant="neutral"
            size="sm"
            disabled={!playButtonEnabled}
            onClick={() => onPlay(setupOptions)}
          />
        </Flex>
      </CardBox>
    </Flex>
  );
}
