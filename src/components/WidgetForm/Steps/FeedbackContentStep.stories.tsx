import { rest } from "msw";
import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@headlessui/react";

import { feedbackTypes } from "..";

import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from "./FeedbackContentStep";

export default {
  title: "Widget/UI/Steps/FeedbackContentStep",
  component: FeedbackContentStep,
  args: {
    feedbackType: "IDEA",
  },
  parameters: {
    msw: {
      handlers: [
        rest.post("/feedbacks", (req, res) => {
          return res();
        }),
      ],
    },
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: "inline-radio",
      },
    },
  },
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
} as Meta<FeedbackContentStepProps>;

export const Default: StoryObj<FeedbackContentStepProps> = {};

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "BUG",
  },
};
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "IDEA",
  },
};
export const Others: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "OTHER",
  },
};
