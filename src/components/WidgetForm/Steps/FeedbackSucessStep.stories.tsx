import { StoryObj, Meta } from "@storybook/react";
import { Popover } from "@headlessui/react";

import { FeedbackSuccessStep } from "./FeedbackSuccessStep";

export default {
  title: "Widget/UI/Steps/FeedbackSuccessStep",
  component: FeedbackSuccessStep,
  decorators: [
    (StoryComponent) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96">
              {StoryComponent()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
