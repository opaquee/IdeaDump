"""empty message

Revision ID: 0d5ae5d5e911
Revises: 
Create Date: 2020-11-14 17:28:34.020437

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d5ae5d5e911'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('topic',
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('name')
    )
    op.create_table('idea',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('visible', sa.Boolean(), nullable=False),
    sa.Column('author', sa.String(length=255), nullable=False),
    sa.Column('topic_name', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['topic_name'], ['topic.name'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('idea')
    op.drop_table('topic')
    # ### end Alembic commands ###