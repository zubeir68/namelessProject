export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('task', 10);
  server.createList('label', 10);
  server.createList('project', 4);
} 
