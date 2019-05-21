<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
				<h4 class="text-center">Tasks</h4>
				<div class="task-list rounded row">
					<div class="task rounded shadow col-sm-5" v-for="task in tasks">
						<h5 class="rounded-top">
							{{ task.name }}

							<span class="task-amount float-right badge badge-primary">${{ task.cost }}</span>
							<span class="float-right badge badge-info">{{ task.status}}</span>
						</h5>
						<div class="description">
							<p>
								{{ task.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 sidebar">
				<h4 class="text-center">Add Task</h4>
				<div class="add-form rounded">

					<form v-on:submit="addTask">
						<div class="form-group">
							<label for="name">
								Name
							</label>
							<input type="text" name="name" id="name" class="form-control" v-model="form.name">
						</div>
						<div class="form-group">
							<label for="description">
								Description
							</label>
							<textarea name="description" id="description" class="form-control" v-model="form.description"></textarea>
						</div>
						<div class="form-group">
							<label for="cost">
								Cost
							</label>
							<input type="number" name="cost" id="cost" class="form-control" v-model="form.cost">
						</div>
						<div class="form-group">
							<label for="dueDate">
								Due Date
							</label>
							<input type="date" name="dueDate" id="dueDate" class="form-control" v-model="form.dueDate">
						</div>
						<div class="form-group">
							<label for="status">
								Status
							</label>
							<select id="status" name="status" class="form-control" v-model="form.status">
								<option>New!</option>
								<option>In Progress</option>
								<option>Done</option>
							</select>
						</div>
						<button class="btn btn-primary full-width">Add New</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Task from '@/models/task';

    @Component({})
    export default class Home extends Vue {
        public tasks: Task[] = [];
        public form: Task = new Task();

        public addTask(event: Event) {
            event.preventDefault();
            this.tasks.push(this.form);
            this.form = new Task();
        }
    }
</script>
