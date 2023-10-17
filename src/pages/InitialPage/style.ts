import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#DCDCDC',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    backgroundColor: 'rgb(2, 37, 89)',
    borderBottomRightRadius: 90,
    marginBottom: '8%',
    padding: '5%',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '40%',
    width: '100%',
  },
  menuFilterContainer: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '3%',
    width: '100%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  menuFilter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginLeft: '5%',
  },
  menuFilterFilter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginRight: '5%',
  },
  menuFilterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: 'red',
  },

  imageProfileContainer: {
    width: '20%',
    height: '90%',
    borderRadius: 50,
  },
  containerHeader: {
    marginTop: '-5%',
    marginLeft: '10%',
    padding: '4%',
  },
  message: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '400',
  },

  sideBarContainer: {
    backgroundColor: 'white',
    height: '94%',
    position: 'absolute',
    zIndex: 999,
    width: '60%',
    marginTop: 60,
    marginRight: '-1%',
    padding: '5%',
    borderTopRightRadius: '60%',
    borderBottomRightRadius: '60%',
    transition: 'all 0.4s ease 0s',
  },

  sideItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    padding: '3%',
    marginTop: 80,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgb(2, 37, 89)',
  },

  sideItemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  sideItemContainerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#c5c4c4',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '71%',
    marginTop: '59%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputTitle: {
    borderColor: '#dfdcdc',
    marginBottom: 10,
    backgroundColor: '#dfdcdc',
    height: '15%',
    padding: 10,
    borderRadius: 5,
  },
  inputDesc: {
    borderColor: '#dfdcdc',
    marginBottom: 10,
    backgroundColor: '#dfdcdc',
    height: '25%',
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  EditButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: '5%',
    borderRadius: 5,
    alignItems: 'center',
  },
  DeleteButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: '5%',
    borderRadius: 5,
    alignItems: 'center',
  },
  ComeBackButton: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: '5%',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: '82%',
    borderColor: '#ccc',
    backgroundColor: '#dfdcdc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderLeftWidth: 5,
    marginBottom: 20,
    width: '90%', // Definindo uma largura fixa para o card
    alignSelf: 'center', // Centralizando o card na tela
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 10,
  },
  statusText: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  bottomRow: {
    marginTop: '3%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'flex-end',
  },

  date: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 'auto',
  },

  markAsCompletedButton: {
    display: 'flex',
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 5,
    marginLeft: 20,
    alignItems: 'center',
    marginRight: 10, // Adicionando margem à direita para separar do botão de editar
  },

  markAsCompletedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  editButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10, // Adicionando margem à direita para separar do botão "Marcar como Concluído"
  },

  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  modalContainerEdit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentEdit: {
    backgroundColor: '#c5c4c4',
    padding: 20,
    borderRadius: 10,
    width: '50%',
    height: '25%',
    marginTop: '20%',
  },
  modalTitleEdit: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
