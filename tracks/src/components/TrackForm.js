import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';


function TrackForm() {

    const { state: {name, recording, location},
            changeName,
            startRecording,
            stopRecording } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack();

    return (
        <>
          <Input value={name} onChangeText={changeName} placeholder="Enter the Text" />
          <Spacer>
          { 
          recording 
          ? <Button title="Stop Recording" onPress={stopRecording} /> 
          : <Button title="Start Recording" onPress={startRecording} /> 
          }
          </Spacer>
          <Spacer>
          {
          !recording && location.length 
          ? <Button title="Save recording" onPress={saveTrack} /> 
          : null 
          }
          </Spacer>
        </>
    )
}

export default TrackForm;
