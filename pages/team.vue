<template>
  <main class="team-page">
    <NavigationBar title="Team"/>
    <div class="content formatted">
      <h1>Team</h1>

      <div class="grid">
        <TeamMember
          v-for="member in members"
          :key="member.id"
          :name="member.name"
          :github-id="member.github_id"
          :department="getDepartmentName(member.department_id)"
        >
        </TeamMember>
      </div>
    </div>
  </main>
</template>

<script>
  import NavigationBar from "@/components/NavigationBar";
  import TeamMember from "../components/TeamMember";

  export default {
    name: "TeamPage",
    components: {
      TeamMember,
      NavigationBar
    },
    data() {
      return {
        members: [],
        departments: []
      };
    },
    async fetch() {
      this.departments = await fetch(
        "https://admin.test.cryptic-game.net/api/website/team/department/list"
      ).then(result => result.json());
      this.members = await fetch(
        "https://admin.test.cryptic-game.net/api/website/team/member/list"
      ).then(result => result.text())
        .then(result => JSON.parse(result))
        .then(result => result.sort(() => Math.random() - 0.5));
    },
    head() {
      return {
        titleTemplate: "Team - %s"
      };
    },
    methods: {
      getDepartmentName(id) {
        for (const department of this.departments) {
          if (department.id === id) {
            return department.name;
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
div.content {
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  $cube: 0.625rem;

  .grid {
    display: grid;

    &:not(.error) {
      grid-template-columns: repeat(auto-fill, minmax($cube * 17, 1fr));
      grid-gap: $cube * 2;
    }

    &.error {
      height: calc(100% * 0.5);
    }

    div.error {
      justify-self: center;
      align-self: center;
      text-align: center;
    }
  }
}
</style>
