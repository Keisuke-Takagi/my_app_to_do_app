#DB設計

## groupsテーブル
| column | type  | option  |
|---|---|---|
|  name |  string |  null:false |
### Assotiation
- has_many :users, through: :group_users
- has_many :group_users
- has_many : lists
- has_many : tasks

## usersテーブル
|  column | type  | option  |
|---|---|---|
| name  |string  | null:false  |
### Assotiation
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :lists
- has_many :tasks
##group_usersテーブル
|   column| type  |option   |
|---|---|---|
| group_id  |  references |  null: false, foreign_key: true  |
| user_id  | references  |  null: false, foreign_key: true |
### Assotiation
- belongs_to :user 
- belongs_to :group
## listテーブル
|  column | type  |option   |
|---|---|---|
|  content|  string | null: false  |
|group_id|integer|null: false|
|user_id|integer|null: false|
### Assotiation
- belongs_to :group
- has_many : tasks
- has_many : lists

##tasks テーブル
|   column |type   |option  |
|---|---|---|
| content |  string |null: false   |
|group_id| integer|null: false|
|user_id|integer|null: false|
|list_id|integer|null: false|
###Assotiation
- has_many :users, through: task_users
- belongs_to : user
- belongs_to :list 
- belongs_to :group