import React from 'react';
import { View, Page, Text } from "luminus-daisy"
import { createRoot } from 'react-dom/client';
import "./index.css"
import IntroBlock from './blocks/intro';
import ButtonBlock from "./blocks/button";
import LoadingBlock from "./blocks/feedback/loading";
import BadgeBlock from './blocks/badge';
import AlertBlock from './blocks/alert';
import CarouselBlock from './blocks/carousel';
import DropdownBlock from './blocks/dropdown';
import ModalBlock from './blocks/modal';
import TabBlock from './blocks/tab';
import ProgressBlock from './blocks/progress';
import LinkBlock from './blocks/link';
import StepsBlock from './blocks/navigation/steps';

import SwapBlock from './blocks/actions/swap';
import CheckboxBlock from './blocks/dataInput/checbox';
import RatingBlock from './blocks/dataInput/rating';
import RadioBlock from './blocks/dataInput/radio';
import RangeBlock from './blocks/dataInput/range';
import FileInputBlock from './blocks/dataInput/fileInput';
import ToggleBlock from './blocks/dataInput/toggle';
import TextareaBlock from './blocks/dataInput/textarea';

import DividerBlock from './blocks/layout/divider';
import ArtboardBlock from './blocks/layout/artboard';

function App() {
  return (
    <Page className="bg-slate-100">
      <IntroBlock />
      <View className="p-4 container max-w-5xl m-auto">


        <Text className="card-title text-4xl font-bold text-slate-900">Actions</Text>
        <SwapBlock />
        <DropdownBlock />
        <ModalBlock />
        <ButtonBlock />

        <div className="divider"></div>

        <Text className="card-title text-4xl font-bold text-slate-900">Data Display</Text>
        <BadgeBlock />
        <CarouselBlock />
        <LoadingBlock />

        <div className="divider"></div>

        <Text className="text-4xl font-bold text-slate-900">Feedback</Text>
        <AlertBlock />
        <ProgressBlock />

        <div className="divider"></div>

        <Text className="text-2xl font-bold text-slate-900">Navigation</Text>
        <TabBlock />
        <LinkBlock />
        <StepsBlock />

        <Text className="text-2xl font-bold text-slate-900">Data input</Text>
        <CheckboxBlock />
        <RatingBlock />
        <RadioBlock />
        <RangeBlock />
        <FileInputBlock />
        <ToggleBlock />
        <TextareaBlock />

        <Text className="text-2xl font-bold text-slate-900">Layout</Text>
        <DividerBlock />
        <ArtboardBlock />
      </View>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
