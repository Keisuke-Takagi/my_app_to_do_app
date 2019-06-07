#DB設計

## groupsテーブル
| column | type  | option  |
|---|---|---|
|  name |  string |  null:false |
### Assotiation
- has_many :users, through: :group_users
- has_many :group_users
- has_many :main_tasks
- has_many : sub_tasks

## usersテーブル
|  column | type  | option  |
|---|---|---|
| name  |string  | null:false  |
### Assotiation
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :main_tasks, through: :main_task_users
- has_many :main_task_users 
- has_many : sub_tasks, through: : sub-task
- has_many : sub_task_users
##group_usersテーブル
|   column| type  |option   |
|---|---|---|
| group_id  |  references |  null: false, foreign_key: true  |
| user  | references  |  null: false, foreign_key: true |
### Assotiation
- belongs_to :user 
- belongs_to :group
## main_tasksテーブル
|  column | type  |option   |
|---|---|---|
|  content|  string | null: false  |
### Assotiation
- belongs_to :group
- has_many : sub-tasks
- has_many :users, through: :main_task_users
- has_many : main_task_users
## main_task_usersテーブル
|  column |type   |option   |
|---|---|---|
|   main_task_id| reference  | null: false, foreign_key: true  |
|  user_id | reference | null: false, foreign_key: true  |
###Assotiation
- belongs_to :main-task
- belongs_to :user
##sub_tasks テーブル
|   column |type   |option  |
|---|---|---|
| content |  string |null: false   |
###Assotiation
- has_many :users, through: sub-task_users
- has_many : sub_task_users
- belongs_to :main-task 
- belongs_to :group
## sub_task_userテーブル
|   column| type  | option  |
|---|---|---|
| sub_task_id  |  integer |null: false , foreign_key: true|
|user_id | integer |null:false, foreign_key: true  |
###Assotiation
- belongs_to :user
- belongs_to : sub-task