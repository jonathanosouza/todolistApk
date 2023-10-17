import React, {useState, useEffect} from 'react';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, Modal} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTodo} from '../../hooks/useTodo';
import {formatDate} from '../../helpers/formatedData';
import {styles} from './style';

export default function Home() {
  const {
    todos,
    getAllTodo,
    createTodo,
    updateStatusTodo,
    EditTodo,
    deleteTodo,
  } = useTodo();

  const [isopen, setIsOpen] = useState(true);
  const [isEditModalVisible, setIsEditMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [itemToDeleteId, setItemToDeleteId] = useState();
  const [deleta, setDeleta] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleAddNewTask = () => {
    const newTask = {
      title: titulo,
      description: descricao,
      status: selectedStatus, // Alterado para usar selectedStatus em vez de status
    };
    try {
      createTodo(newTask);
    } catch (error) {
      console.error('Erro ao criar novo todo:', error);
    }
    setStatus(''); // Limpar o status após adicionar a tarefa
    setTitulo(''); // Limpar o status após adicionar a tarefa
    setDescricao('');
    setIsModalVisible(false);
    console.log(newTask);
  };

  const handleChangeStatus = async (id: number) => {
    const statusEdited = {
      status: 'CONCLUÍDO',
    };
    try {
      console.log(statusEdited);
      await updateStatusTodo(id, statusEdited);
    } catch (error) {
      console.error('Erro ao atualizar status da tarefa:', error);
    }
    console.log(id);
  };

  const handleOpen = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setIsEditMenuVisible(false);
  };

  const handleDeleteTodo = async (id: number) => {
    console.log(id);
    console.log(itemToDeleteId);
    setIsEditMenuVisible(true);
    setItemToDeleteId(id);
  };

  const DeleteTodo = async () => {
    try {
      const id = parseInt(itemToDeleteId, 10);
      await deleteTodo(id);
      setIsEditMenuVisible(false);
      setItemToDeleteId(null);
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  };

  const handleEditOpen = id => {
    const todoToEdit = todos.find(todo => todo.id === id);

    if (todoToEdit) {
      setTitulo(todoToEdit.title);
      setDescricao(todoToEdit.description);
      setStatus(todoToEdit.status);
      setEditItemId(id);
    }

    setIsModalVisible(true);
  };

  const handleEditItem = async () => {
    if (!editItemId) {
      return;
    }

    const editedTask = {
      title: titulo,
      description: descricao,
      status: status,
    };

    try {
      await EditTodo(editItemId, editedTask);
      setIsModalVisible(false);
      setEditItemId(null);
    } catch (error) {
      console.error('Erro ao editar a tarefa:', error);
    }
  };

  const open = () => setIsOpen(true);
  const closeopen = () => setIsOpen(false);
  const navigation = useNavigation();

  useEffect(() => {
    getAllTodo();
  }, [getAllTodo, todos]);

  return (
    <View style={styles.container}>
      {isopen ? (
        <View style={styles.headerContainer}>
          <View style={styles.menuContainer}>
            <Icon
              onPress={() => closeopen()}
              name="menuunfold"
              color="white"
              size={30}
            />
            <Image
              source={require('../../assets/eu.png')}
              style={styles.imageProfileContainer}
            />
          </View>

          <Animatable.View
            delay={500}
            animation="fadeInLeft"
            style={styles.containerHeader}>
            <Text style={styles.message}>Bem-Vindo(a),</Text>
            <Text style={styles.message}>Jonathan Souza</Text>
          </Animatable.View>
        </View>
      ) : (
        <Icon
          onPress={() => open()}
          name="menuunfold"
          color="black"
          size={30}
        />
      )}
      <ScrollView>
        <View style={styles.menuFilterContainer}>
          <Text>Filtrar:</Text>
          <Picker
            selectedValue={selectedStatus}
            onValueChange={itemValue => setSelectedStatus(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Todas as Tarefas" value="Todas as Tarefas" />
            <Picker.Item label="Concluído" value="CONCLUÍDO" />
            <Picker.Item label="A Fazer" value="A FAZER" />
          </Picker>
        </View>

        {todos
          .filter(todo => {
            if (selectedStatus === 'Todas as Tarefas') {
              return true;
            } else {
              return todo.status.toUpperCase() === selectedStatus;
            }
          })
          .map(todo => (
            <View
              key={todo.id}
              style={{
                ...styles.card,
                borderLeftColor:
                  todo.status.toUpperCase() === 'CONCLUÍDO' ? 'green' : 'red',
              }}>
              <View style={styles.statusContainer}>
                <View style={styles.statusContent}>
                  <Icon
                    name="checkcircleo"
                    color={
                      todo.status.toUpperCase() === 'CONCLUÍDO'
                        ? 'green'
                        : 'red'
                    }
                    size={16}
                    style={styles.statusIcon}
                  />
                  <Text style={styles.statusText}>
                    {todo.status.toUpperCase() === 'CONCLUÍDO'
                      ? 'Concluído'
                      : 'A Fazer'}
                  </Text>
                </View>
                <Text style={styles.title}>{todo.title}</Text>
              </View>

              <Text style={styles.description}>{todo.description}</Text>
              <View style={styles.bottomRow}>
                <Text style={styles.date}>{formatDate(todo.created_at)}</Text>
                {todo.status.toUpperCase() === 'A FAZER' && (
                  <TouchableOpacity
                    style={styles.markAsCompletedButton}
                    onPress={() => handleChangeStatus(todo.id)}>
                    <Text style={styles.markAsCompletedText}>
                      Marcar como Concluído
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => handleEditOpen(todo.id)}>
                  <Icon
                    name="form"
                    color="gray"
                    size={24}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTodo(todo.id)}>
                  <Icon
                    name="delete"
                    color="red"
                    size={24}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>
              </View>
              <View />
            </View>
          ))}

        <TouchableOpacity style={styles.addButton} onPress={() => handleOpen()}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {editItemId ? 'Editar Tarefa' : 'Adicionar Tarefa'}
              </Text>
              <TextInput
                style={styles.inputTitle}
                placeholder="Título"
                value={titulo}
                onChangeText={text => setTitulo(text)}
              />
              <TextInput
                style={styles.inputDesc}
                placeholder="Descrição"
                value={descricao}
                onChangeText={text => setDescricao(text)}
              />
              <Picker
                selectedValue={status}
                onValueChange={itemValue => setStatus(itemValue)}
                style={styles.picker}>
                <Picker.Item label="A FAZER" value="A FAZER" />
                <Picker.Item label="CONCLUÍDO" value="CONCLUÍDO" />
              </Picker>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={editItemId ? handleEditItem : handleAddNewTask}>
                <Text style={styles.saveButtonText}>
                  {editItemId ? 'Editar' : 'Salvar'}
                </Text>
              </TouchableOpacity>

              {editItemId ? (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    setIsModalVisible(false);
                    setEditItemId(null);
                  }}>
                  <Text style={styles.closeButtonText}>Cancelar Edição</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    setIsModalVisible(false);
                    setEditItemId(null);
                  }}>
                  <Text style={styles.closeButtonText}>Cancelar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditModalVisible}
        onRequestClose={() => setIsEditMenuVisible(false)}>
        <View style={styles.modalContainerEdit}>
          <View style={styles.modalContentEdit}>
            <Text style={{color: 'black'}}>Tem Certeza que Deseja Excluir</Text>
            <TouchableOpacity
              style={styles.DeleteButton}
              onPress={() => {
                DeleteTodo();
                setDeleta(false);
                setIsEditMenuVisible(false);
              }}>
              <Text style={styles.closeButtonText}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ComeBackButton}
              onPress={handleClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
