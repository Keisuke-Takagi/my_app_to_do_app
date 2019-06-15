#DB設計

## groupsテーブル
| column | type  | option  |
|---|---|---|
|  name |  string |  null:false |
### Assotiation
- has_many :users, through: :group_users
- has_many :group_users
- has_many : lists
- has_many : cards

## usersテーブル
|  column | type  | option  |
|---|---|---|
| name  |string  | null:false  |
### Assotiation
- has_many :groups, through: :group_users
- has_many :group_users
##group_usersテーブル
|   column| type  |option   |
|---|---|---|
| group_id  |  references |  null: false, foreign_key: true  |
| user_id  | references  |  null: false, foreign_key: true |
### Assotiation
- belongs_to :user 
- belongs_to :group
## listsテーブル
|  column | type  |option   |
|---|---|---|
|  text|  string | null: false  |
### Assotiation
- belongs_to :group
- has_many : cards
##cards テーブル
|   column |type   |option  |
|---|---|---|
| text |  string |null: false   |
###Assotiation
- belongs_to :list
- belongs_to :group