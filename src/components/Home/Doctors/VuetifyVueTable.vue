<template>
  <v-container>
    <template>
      <v-simple-table class="elevation-10 my-10">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Joining Date</th>
              <th class="text-left">Image Link</th>
              <th class="text-left">Doctor Rating</th>
              <th class="text-left">Doctor Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doctor in doctors" :key="doctor.id">
              <td>
                <div class="main-item">
                  <span class="name-item">{{ doctor.name }}</span>
                  <img
                    class="star-img"
                    src="https://i.ibb.co/5hLkDzw/star.png"
                    alt=""
                  />
                </div>
              </td>
              <td>{{ doctor.join }}</td>
              <td>
                <div class="main-item">
                  <span class="name-item">{{ doctor.img }}</span>
                  <img class="star-img" :src="doctor.img" alt="" />
                </div>
              </td>

              <td>{{ doctor.rating }}</td>
              <td>{{ doctor.designation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "Vuetify-Table",
  data() {
    return {
      //TABLE DATA
      search: "",
      doctors: [
        {
          id: "1",
          name: "Dr Abedin Islam",
          rating: "4.4",
          join: "25-07-2020",
          img: "https://i.ibb.co/W5XC0QM/doctors-4-1.jpg",
          designation: "Allergists/Immunologists",
        },
        {
          id: "2",
          name: "Dr Neha Islam",
          rating: "4.5",
          join: "12-05-2021",
          img: "https://i.ibb.co/251ZDHB/doctors-2-1.jpg",
          designation: "Cardiologists",
        },
        {
          id: "3",
          name: "Dr Christian Islam",
          rating: "4.9",
          join: "01-05-2019",
          img: "https://i.ibb.co/pLH4Zws/doctors-3-1.jpg",
          designation: "Dermatologists",
        },
        {
          id: "4",
          name: "Dr Nadir Islam",
          rating: "4.3",
          join: "13-04-2017",
          img: "https://i.ibb.co/n7CKBgZ/doctors-1-1.jpg",
          designation: "Gastroenterologists",
        },
        {
          id: "5",
          name: "Dr Smith Islam",
          rating: "4.9",
          join: "23-05-2030",
          img: "https://i.ibb.co/rf3R4FT/pexels-mikhail-nilov-8942072-1.jpg",
          designation: "Hematologists",
        },
        {
          id: "6",
          name: "Dr Angelina Islam",
          rating: "4.2",
          join: "02-06-2020",
          img: "https://i.ibb.co/1snB5mt/doctors-6-1.jpg",
          designation: "Neurologists",
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border: 2px solid #3f51b5;
}
td,
th {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  text-align: left;
  max-width: 20px;
}
.profile-img {
  border-radius: 25%;
  width: 30px;
}
.main-item {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-item {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.star-img {
  width: 20px;
}
</style>
