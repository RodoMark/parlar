import React from 'react';


import Button from "../components/buttons/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: 'Components/Button',
  component: Button,
}

export const base = () => <Button>Button</Button>;
base.storyName = 'Base';

export const confirm = () => <Button confirm>Confirm</Button>;
confirm.storyName = 'Confirm';

export const danger = () => <Button danger>Danger</Button>;
danger.storyName = 'Danger';

export const clickable = () =>  <Button onClick={action("button-clicked")}>Clickable</Button>;
clickable.storyName = 'Clickable';

export const disabled= () =>  <Button disabled onClick={action("button-clicked")}>Disabled</Button>;
disabled.storyName = 'Disabled';


