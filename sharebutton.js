import React, { useState } from 'react';
import { TouchableOpacity, View, Text ,Image} from 'react-native';
import Modal from 'react-native-modal';

const ShareButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const shareViaWhatsApp = () => {
    // Logic for sharing via WhatsApp
  };

  const shareViaOtherApps = () => {
    // Logic for sharing via other apps
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={{position:'relative',left:100}}>
      <Image source={require('./assets/sharebutton.png')} style={{width:55,height:72}} />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ backgroundColor: '#D3DDE1',padding:7,flexDirection:'row',justifyContent:'space-between' }}>
          <TouchableOpacity onPress={shareViaWhatsApp}>
          <Image source={require('./assets/whatsapplogo.png')} style={{width:55,height:72}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareViaWhatsApp}>
          <Image source={require('./assets/telegramlogo.png')} style={{width:70,height:72}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareViaWhatsApp}>
          <Image source={require('./assets/linkedinlogo.png')} style={{width:65,height:72}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareViaWhatsApp}>
          <Image source={require('./assets/shareviaotherlogo.png')} style={{width:65,height:72}} />
          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
};

export default ShareButton;
