import MTable from './MTable.vue';

export default {
  title: 'UI/MTable',
  component: MTable,
  argTypes: {}
};

export const Detail = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTable },
  template: `
  <MTable type="detail">
    <template v-slot:header>
      <tr>
        <template v-for="(headerItem, headerIndex) in headers">
          <th style="padding: 24px 24px 0 24px">{{ headerItem }}</th>
        </template>
      </tr>
    </template>
    <template v-slot:body>
      <tr v-for="(bodyItem, bodyIndex) in bodies" :key="bodyIndex">
        <td style="padding:8px 24px 24px;">{{ bodyItem.id }}</td>
        <td style="padding:8px 24px 24px;">{{ bodyItem.name }}</td>
        <td style="padding:8px 24px 24px;">{{ bodyItem.text }}</td>
      </tr>
    </template>
  </MTable>`,
  data() {
    return {
      headers: ['id', 'name', 'text'],
      bodies: [
        {
          id: 1,
          name: 'mina table',
          text: 'text sample'
        }
      ]
    };
  }
});

export const Company = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MTable },
  template: `
  <MTable type="company">
    <template v-slot:header>
      <tr>
        <template v-for="(headerItem, headerIndex) in headers">
          <th style="padding: 16px">{{ headerItem }}</th>
        </template>
      </tr>
    </template>
    <template v-slot:body>
      <tr v-for="(bodyItem, bodyIndex) in bodies" :key="bodyIndex">
        <td style="border-bottom: 1px solid #dfe3e8;padding:24px;">{{ bodyItem.id }}</td>
        <td style="border-bottom: 1px solid #dfe3e8;padding:24px;">{{ bodyItem.name }}</td>
        <td style="border-bottom: 1px solid #dfe3e8;padding:24px;">{{ bodyItem.text }}</td>
      </tr>
    </template>
  </MTable>`,
  data() {
    return {
      headers: ['id', 'name', 'text'],
      bodies: [
        {
          id: 1,
          name: 'mina table',
          text: 'text sample'
        },
        {
          id: 2,
          name: 'mina table',
          text: 'text sample'
        },
        {
          id: 3,
          name: 'mina table',
          text: 'text sample'
        }
      ]
    };
  }
});
