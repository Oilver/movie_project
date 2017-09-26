package com.movie_project.model.entity;

import com.movie_project.util.PaginationUtil;
import java.util.ArrayList;
import java.util.List;

public class clientExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected PaginationUtil pagination;

    public clientExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPagination(PaginationUtil pagination) {
        this.pagination=pagination;
    }

    public PaginationUtil getPagination() {
        return pagination;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andCliNumIsNull() {
            addCriterion("cli_num is null");
            return (Criteria) this;
        }

        public Criteria andCliNumIsNotNull() {
            addCriterion("cli_num is not null");
            return (Criteria) this;
        }

        public Criteria andCliNumEqualTo(String value) {
            addCriterion("cli_num =", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumNotEqualTo(String value) {
            addCriterion("cli_num <>", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumGreaterThan(String value) {
            addCriterion("cli_num >", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumGreaterThanOrEqualTo(String value) {
            addCriterion("cli_num >=", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumLessThan(String value) {
            addCriterion("cli_num <", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumLessThanOrEqualTo(String value) {
            addCriterion("cli_num <=", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumLike(String value) {
            addCriterion("cli_num like", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumNotLike(String value) {
            addCriterion("cli_num not like", value, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumIn(List<String> values) {
            addCriterion("cli_num in", values, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumNotIn(List<String> values) {
            addCriterion("cli_num not in", values, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumBetween(String value1, String value2) {
            addCriterion("cli_num between", value1, value2, "cliNum");
            return (Criteria) this;
        }

        public Criteria andCliNumNotBetween(String value1, String value2) {
            addCriterion("cli_num not between", value1, value2, "cliNum");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNull() {
            addCriterion("password is null");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNotNull() {
            addCriterion("password is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordEqualTo(String value) {
            addCriterion("password =", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotEqualTo(String value) {
            addCriterion("password <>", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThan(String value) {
            addCriterion("password >", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("password >=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThan(String value) {
            addCriterion("password <", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThanOrEqualTo(String value) {
            addCriterion("password <=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLike(String value) {
            addCriterion("password like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotLike(String value) {
            addCriterion("password not like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordIn(List<String> values) {
            addCriterion("password in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotIn(List<String> values) {
            addCriterion("password not in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordBetween(String value1, String value2) {
            addCriterion("password between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotBetween(String value1, String value2) {
            addCriterion("password not between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andCliNameIsNull() {
            addCriterion("cli_name is null");
            return (Criteria) this;
        }

        public Criteria andCliNameIsNotNull() {
            addCriterion("cli_name is not null");
            return (Criteria) this;
        }

        public Criteria andCliNameEqualTo(String value) {
            addCriterion("cli_name =", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameNotEqualTo(String value) {
            addCriterion("cli_name <>", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameGreaterThan(String value) {
            addCriterion("cli_name >", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameGreaterThanOrEqualTo(String value) {
            addCriterion("cli_name >=", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameLessThan(String value) {
            addCriterion("cli_name <", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameLessThanOrEqualTo(String value) {
            addCriterion("cli_name <=", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameLike(String value) {
            addCriterion("cli_name like", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameNotLike(String value) {
            addCriterion("cli_name not like", value, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameIn(List<String> values) {
            addCriterion("cli_name in", values, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameNotIn(List<String> values) {
            addCriterion("cli_name not in", values, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameBetween(String value1, String value2) {
            addCriterion("cli_name between", value1, value2, "cliName");
            return (Criteria) this;
        }

        public Criteria andCliNameNotBetween(String value1, String value2) {
            addCriterion("cli_name not between", value1, value2, "cliName");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNull() {
            addCriterion("phone is null");
            return (Criteria) this;
        }

        public Criteria andPhoneIsNotNull() {
            addCriterion("phone is not null");
            return (Criteria) this;
        }

        public Criteria andPhoneEqualTo(Integer value) {
            addCriterion("phone =", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotEqualTo(Integer value) {
            addCriterion("phone <>", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThan(Integer value) {
            addCriterion("phone >", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneGreaterThanOrEqualTo(Integer value) {
            addCriterion("phone >=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThan(Integer value) {
            addCriterion("phone <", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneLessThanOrEqualTo(Integer value) {
            addCriterion("phone <=", value, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneIn(List<Integer> values) {
            addCriterion("phone in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotIn(List<Integer> values) {
            addCriterion("phone not in", values, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneBetween(Integer value1, Integer value2) {
            addCriterion("phone between", value1, value2, "phone");
            return (Criteria) this;
        }

        public Criteria andPhoneNotBetween(Integer value1, Integer value2) {
            addCriterion("phone not between", value1, value2, "phone");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}