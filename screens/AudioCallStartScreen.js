import React from 'react';
import * as AudioCall from '../custom-files/AudioCall.js';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';

const AudioCallStartScreen = props => {
  const { theme } = props;

  const [OngoingView, setOngoingView] = React.useState(false);
  const [RingingView, setRingingView] = React.useState(true);
  const [mute, setMute] = React.useState(false);
  const [speaker, setSpeaker] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
    >
      <Utils.CustomCodeErrorBoundary>
        <AudioCall.AppContent />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(AudioCallStartScreen);
