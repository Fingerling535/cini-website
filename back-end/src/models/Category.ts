// src/models/Category.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;            // örn. "Dekoratif Ürünler" veya "Panolar"

  // Bir kategorinin üst kategorisi olabilir (root için null)
  @ManyToOne(() => Category, category => category.children, { nullable: true })
  parent: Category | null;

  // Bir kategorinin birden fazla alt kategorisi olabilir
  @OneToMany(() => Category, category => category.parent)
  children: Category[];
}
