import firebase from 'firebase';
import { ref, onUnmounted } from 'vue'

var firebaseConfig = {
  apiKey: "AIzaSyC2BW9yA2Ap1IGxqJ7fq_lmm9_pqINfMZ8",
  authDomain: "vue-crud-lat.firebaseapp.com",
  projectId: "vue-crud-lat",
  storageBucket: "vue-crud-lat.appspot.com",
  messagingSenderId: "954863918277",
  appId: "1:954863918277:web:db6f2dc95183565bf7e4ac",
  measurementId: "G-Y9VLQXFTDH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore()
  const bukusCollection = db.collection('users')

  export const createBuku = buku => {
    return bukusCollection.add(buku)
  }

  export const getBuku = async id => {
    const buku = await bukusCollection.doc(id).get()
    return buku.exists ? buku.data.data() : null
  } 

  export const updateBuku = (id, user) => {
    return bukusCollection.doc(id).update(user);
  }
  
  export const deleteBuku = id => {
      return bukusCollection.doc(id).delete()
  }

  export const useLoadBukus = () => {
      const bukus = ref([])
      const close = bukusCollection.onSnapshot(snapshot => {
          bukus.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      })

      onUnmounted(close)
      return bukus
  }